package core

type IpAddressLookupTwoError struct {
	IsIpAddressLookupTwoError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpAddressLookupTwoError(code string, msg string, ctx *Context) *IpAddressLookupTwoError {
	return &IpAddressLookupTwoError{
		IsIpAddressLookupTwoError: true,
		Sdk:              "IpAddressLookupTwo",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpAddressLookupTwoError) Error() string {
	return e.Msg
}
