package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCheckers = "checkers"

var _ sdk.Msg = &MsgCheckers{}

func NewMsgCheckers(creator string) *MsgCheckers {
	return &MsgCheckers{
		Creator: creator,
	}
}

func (msg *MsgCheckers) Route() string {
	return RouterKey
}

func (msg *MsgCheckers) Type() string {
	return TypeMsgCheckers
}

func (msg *MsgCheckers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
