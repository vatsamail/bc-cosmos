/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "alice.checkers.checkers";
const baseMsgCreatePost = { creator: "", title: "", body: "" };
export const MsgCreatePost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.body !== "") {
            writer.uint32(26).string(message.body);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        }
        else {
            message.body = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        message.body !== undefined && (obj.body = message.body);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        else {
            message.body = "";
        }
        return message;
    },
};
const baseMsgCreatePostResponse = {};
export const MsgCreatePostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePostResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePostResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePostResponse };
        return message;
    },
};
const baseMsgCheckers = { creator: "" };
export const MsgCheckers = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCheckers };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCheckers };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCheckers };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgCheckersResponse = {};
export const MsgCheckersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCheckersResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCheckersResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCheckersResponse };
        return message;
    },
};
const baseMsgCreateGame = { creator: "", red: "", black: "" };
export const MsgCreateGame = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.red !== "") {
            writer.uint32(18).string(message.red);
        }
        if (message.black !== "") {
            writer.uint32(26).string(message.black);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGame };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.red = reader.string();
                    break;
                case 3:
                    message.black = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = String(object.red);
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = String(object.black);
        }
        else {
            message.black = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.red !== undefined && (obj.red = message.red);
        message.black !== undefined && (obj.black = message.black);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = object.red;
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = object.black;
        }
        else {
            message.black = "";
        }
        return message;
    },
};
const baseMsgCreateGameResponse = { idValue: "" };
export const MsgCreateGameResponse = {
    encode(message, writer = Writer.create()) {
        if (message.idValue !== "") {
            writer.uint32(10).string(message.idValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGameResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.idValue !== undefined && (obj.idValue = message.idValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        return message;
    },
};
const baseMsgPlayMove = {
    creator: "",
    idValue: "",
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0,
};
export const MsgPlayMove = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idValue !== "") {
            writer.uint32(18).string(message.idValue);
        }
        if (message.fromX !== 0) {
            writer.uint32(24).uint64(message.fromX);
        }
        if (message.fromY !== 0) {
            writer.uint32(32).uint64(message.fromY);
        }
        if (message.toX !== 0) {
            writer.uint32(40).uint64(message.toX);
        }
        if (message.toY !== 0) {
            writer.uint32(48).uint64(message.toY);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPlayMove };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.idValue = reader.string();
                    break;
                case 3:
                    message.fromX = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.fromY = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.toX = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.toY = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPlayMove };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        if (object.fromX !== undefined && object.fromX !== null) {
            message.fromX = Number(object.fromX);
        }
        else {
            message.fromX = 0;
        }
        if (object.fromY !== undefined && object.fromY !== null) {
            message.fromY = Number(object.fromY);
        }
        else {
            message.fromY = 0;
        }
        if (object.toX !== undefined && object.toX !== null) {
            message.toX = Number(object.toX);
        }
        else {
            message.toX = 0;
        }
        if (object.toY !== undefined && object.toY !== null) {
            message.toY = Number(object.toY);
        }
        else {
            message.toY = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idValue !== undefined && (obj.idValue = message.idValue);
        message.fromX !== undefined && (obj.fromX = message.fromX);
        message.fromY !== undefined && (obj.fromY = message.fromY);
        message.toX !== undefined && (obj.toX = message.toX);
        message.toY !== undefined && (obj.toY = message.toY);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPlayMove };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        if (object.fromX !== undefined && object.fromX !== null) {
            message.fromX = object.fromX;
        }
        else {
            message.fromX = 0;
        }
        if (object.fromY !== undefined && object.fromY !== null) {
            message.fromY = object.fromY;
        }
        else {
            message.fromY = 0;
        }
        if (object.toX !== undefined && object.toX !== null) {
            message.toX = object.toX;
        }
        else {
            message.toX = 0;
        }
        if (object.toY !== undefined && object.toY !== null) {
            message.toY = object.toY;
        }
        else {
            message.toY = 0;
        }
        return message;
    },
};
const baseMsgPlayMoveResponse = { idValue: "" };
export const MsgPlayMoveResponse = {
    encode(message, writer = Writer.create()) {
        if (message.idValue !== "") {
            writer.uint32(10).string(message.idValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPlayMoveResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPlayMoveResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.idValue !== undefined && (obj.idValue = message.idValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPlayMoveResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        return message;
    },
};
const baseMsgRejectGame = { creator: "", idValue: "" };
export const MsgRejectGame = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idValue !== "") {
            writer.uint32(18).string(message.idValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRejectGame };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.idValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRejectGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idValue !== undefined && (obj.idValue = message.idValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRejectGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        return message;
    },
};
const baseMsgRejectGameResponse = {};
export const MsgRejectGameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRejectGameResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRejectGameResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRejectGameResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreatePost(request) {
        const data = MsgCreatePost.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "CreatePost", data);
        return promise.then((data) => MsgCreatePostResponse.decode(new Reader(data)));
    }
    Checkers(request) {
        const data = MsgCheckers.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "Checkers", data);
        return promise.then((data) => MsgCheckersResponse.decode(new Reader(data)));
    }
    CreateGame(request) {
        const data = MsgCreateGame.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "CreateGame", data);
        return promise.then((data) => MsgCreateGameResponse.decode(new Reader(data)));
    }
    PlayMove(request) {
        const data = MsgPlayMove.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "PlayMove", data);
        return promise.then((data) => MsgPlayMoveResponse.decode(new Reader(data)));
    }
    RejectGame(request) {
        const data = MsgRejectGame.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "RejectGame", data);
        return promise.then((data) => MsgRejectGameResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
