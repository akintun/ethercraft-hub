import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { formatUnits, parseUnits } from 'viem';

export const useGameToken = () => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const mintTokens = (to: `0x${string}`, amount: string) => {
    const parsedAmount = parseUnits(amount, 18);
    writeContract({
      address: CONTRACTS.gameToken.address,
      abi: CONTRACTS.gameToken.abi,
      functionName: 'mint',
      args: [to, parsedAmount] as const,
    } as any);
  };

  const transferTokens = (to: `0x${string}`, amount: string) => {
    const parsedAmount = parseUnits(amount, 18);
    writeContract({
      address: CONTRACTS.gameToken.address,
      abi: CONTRACTS.gameToken.abi,
      functionName: 'transfer',
      args: [to, parsedAmount] as const,
    } as any);
  };

  return {
    mintTokens,
    transferTokens,
    isPending: isPending || isConfirming,
    isSuccess,
    transactionHash: hash,
  };
};

export const useTokenBalance = (address?: `0x${string}`) => {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.gameToken.address,
    abi: CONTRACTS.gameToken.abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  } as any);

  return {
    balance: data ? formatUnits(data as bigint, 18) : '0',
    isLoading,
    refetch,
  };
};

export const useTotalSupply = () => {
  const { data, isLoading } = useReadContract({
    address: CONTRACTS.gameToken.address,
    abi: CONTRACTS.gameToken.abi,
    functionName: 'totalSupply',
  } as any);

  return {
    totalSupply: data ? formatUnits(data as bigint, 18) : '0',
    isLoading,
  };
};
