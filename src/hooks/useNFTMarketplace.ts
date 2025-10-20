import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { parseEther } from 'viem';
import { toast } from 'sonner';

export const useNFTMarketplace = () => {
  const { writeContractAsync, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const listNFT = async (tokenId: bigint, priceInEth: string) => {
    const toastId = toast.loading('Listing NFT...');
    try {
      const price = parseEther(priceInEth);
      const txHash = await writeContractAsync({
        address: CONTRACTS.nftMarketplace.address,
        abi: CONTRACTS.nftMarketplace.abi,
        functionName: 'listNFT',
        args: [tokenId, price],
      });
      
      toast.success('Transaction submitted!', { id: toastId, description: `Hash: ${txHash}` });
    } catch (error: any) {
      toast.error('Listing failed', { id: toastId, description: error.shortMessage || error.message });
    }
  };

  const buyNFT = async (tokenId: bigint, priceInEth: string) => {
    const toastId = toast.loading('Purchasing NFT...');
    try {
      const price = parseEther(priceInEth);
      const txHash = await writeContractAsync({
        address: CONTRACTS.nftMarketplace.address,
        abi: CONTRACTS.nftMarketplace.abi,
        functionName: 'buyNFT',
        args: [tokenId],
        value: price,
      });

      toast.success('Purchase successful!', { id: toastId, description: `Hash: ${txHash}` });
    } catch (error: any) {
      toast.error('Purchase failed', { id: toastId, description: error.shortMessage || error.message });
    }
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
  });

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
  });

  return {
    price: data as bigint | undefined,
    isLoading,
  };
};
