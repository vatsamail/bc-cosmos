import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/checkers/tx";
import { MsgCheckers } from "./types/checkers/tx";
import { MsgCreateGame } from "./types/checkers/tx";
import { MsgRejectGame } from "./types/checkers/tx";
import { MsgPlayMove } from "./types/checkers/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgCheckers: (data: MsgCheckers) => EncodeObject;
    msgCreateGame: (data: MsgCreateGame) => EncodeObject;
    msgRejectGame: (data: MsgRejectGame) => EncodeObject;
    msgPlayMove: (data: MsgPlayMove) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
