import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { formatUnits, parseUnits } from 'viem';
import { toast } from 'sonner';

export const useGameToken = () => {
  const { writeContractAsync, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleContractWrite = async (
    functionName: 'mint' | 'transfer', 
    args: readonly [`0x${string}`, bigint]
  ) => {
    const toastId = toast.loading('Sending transaction...');
    try {
      const txHash = await writeContractAsync({
        address: CONTRACTS.gameToken.address,
        abi: CONTRACTS.gameToken.abi,
        functionName,
        args,
      });

      toast.success('Transaction submitted!', {
        id: toastId,
        description: `Hash: ${txHash}`,
      });
      return txHash;

    } catch (error: any) {
      toast.error('Transaction failed', {
        id: toastId,
        description: error.shortMessage || error.message,
      });
      return null;
    }
  };

  const mintTokens = (to: `0x${string}`, amount: string) => {
    const parsedAmount = parseUnits(amount, 18);
    return handleContractWrite('mint', [to, parsedAmount]);
  };

  const transferTokens = (to: `0x${string}`, amount: string) => {
    const parsedAmount = parseUnits(amount, 18);
    return handleContractWrite('transfer', [to, parsedAmount]);
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
  });

  return {
    balance: data ? formatUnits(data, 18) : '0',
    isLoading,
    refetch,
  };
};

export const useTotalSupply = () => {
  const { data, isLoading } = useReadContract({
    address: CONTRACTS.gameToken.address,
    abi: CONTRACTS.gameToken.abi,
    functionName: 'totalSupply',
  });

  return {
    totalSupply: data ? formatUnits(data, 18) : '0',
    isLoading,
  };
};
