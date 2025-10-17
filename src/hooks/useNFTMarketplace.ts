import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { parseEther } from 'viem';

export const useNFTMarketplace = () => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const listNFT = (tokenId: bigint, priceInEth: string) => {
    const price = parseEther(priceInEth);
    writeContract({
      address: CONTRACTS.nftMarketplace.address,
      abi: CONTRACTS.nftMarketplace.abi,
      functionName: 'listNFT',
      args: [tokenId, price] as const,
    } as any);
  };

  const buyNFT = (tokenId: bigint, priceInEth: string) => {
    const price = parseEther(priceInEth);
    writeContract({
      address: CONTRACTS.nftMarketplace.address,
      abi: CONTRACTS.nftMarketplace.abi,
      functionName: 'buyNFT',
      args: [tokenId] as const,
      value: price,
    } as any);
  };

  return {
    listNFT,
    buyNFT,
    isPending: isPending || isConfirming,
    isSuccess,
    transactionHash: hash,
  };
};

export const useListedNFTs = () => {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.nftMarketplace.address,
    abi: CONTRACTS.nftMarketplace.abi,
    functionName: 'getListedNFTs',
  } as any);

  return {
    listedNFTs: (data as bigint[]) || [],
    isLoading,
    refetch,
  };
};

export const useNFTPrice = (tokenId?: bigint) => {
  const { data, isLoading } = useReadContract({
    address: CONTRACTS.nftMarketplace.address,
    abi: CONTRACTS.nftMarketplace.abi,
    functionName: 'getNFTPrice',
    args: tokenId !== undefined ? [tokenId] : undefined,
  } as any);

  return {
    price: data as bigint | undefined,
    isLoading,
  };
};
