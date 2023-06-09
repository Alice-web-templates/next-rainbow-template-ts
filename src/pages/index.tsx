"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";
import { abi, contractAdx } from "~/data/contractData";
import { readContract, writeContract } from "wagmi/actions";

export default function App() {
  const { address } = useAccount();

  // const { data, isError, isLoading } = useContractRead({
  const getNum = async () => {
    const res = await readContract({
      address: contractAdx,
      abi: abi,
      functionName: "getNum",
    });
    console.log(res);
  };

  const changeNum = async () => {
    const res = await writeContract({
      address: contractAdx,
      abi: abi,
      functionName: "updateNum",
      args: [2],
    });
    console.log(res);
  };

  return (
    <div>
      <h1>Dicks {address}</h1>
      <ConnectButton />
      <button onClick={getNum}>Get Num</button>
      <hr />
      <button onClick={changeNum}>update</button>
    </div>
  );
}
