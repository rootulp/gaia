// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: intertx/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC
type QueryInterchainAccountFromAddressRequest struct {
	Owner                    string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner,omitempty"`
	ConnectionId             string `protobuf:"bytes,2,opt,name=connection_id,json=connectionId,proto3" json:"connection_id,omitempty" yaml:"connection_id"`
	CounterpartyConnectionId string `protobuf:"bytes,3,opt,name=counterparty_connection_id,json=counterpartyConnectionId,proto3" json:"counterparty_connection_id,omitempty" yaml:"counterparty_connection_id"`
}

func (m *QueryInterchainAccountFromAddressRequest) Reset() {
	*m = QueryInterchainAccountFromAddressRequest{}
}
func (m *QueryInterchainAccountFromAddressRequest) String() string { return proto.CompactTextString(m) }
func (*QueryInterchainAccountFromAddressRequest) ProtoMessage()    {}
func (*QueryInterchainAccountFromAddressRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5c0b2be0eec8e13d, []int{0}
}
func (m *QueryInterchainAccountFromAddressRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInterchainAccountFromAddressRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInterchainAccountFromAddressRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInterchainAccountFromAddressRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInterchainAccountFromAddressRequest.Merge(m, src)
}
func (m *QueryInterchainAccountFromAddressRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryInterchainAccountFromAddressRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInterchainAccountFromAddressRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInterchainAccountFromAddressRequest proto.InternalMessageInfo

func (m *QueryInterchainAccountFromAddressRequest) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *QueryInterchainAccountFromAddressRequest) GetConnectionId() string {
	if m != nil {
		return m.ConnectionId
	}
	return ""
}

func (m *QueryInterchainAccountFromAddressRequest) GetCounterpartyConnectionId() string {
	if m != nil {
		return m.CounterpartyConnectionId
	}
	return ""
}

// QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC
type QueryInterchainAccountFromAddressResponse struct {
	InterchainAccountAddress string `protobuf:"bytes,1,opt,name=interchain_account_address,json=interchainAccountAddress,proto3" json:"interchain_account_address,omitempty" yaml:"interchain_account_address"`
}

func (m *QueryInterchainAccountFromAddressResponse) Reset() {
	*m = QueryInterchainAccountFromAddressResponse{}
}
func (m *QueryInterchainAccountFromAddressResponse) String() string {
	return proto.CompactTextString(m)
}
func (*QueryInterchainAccountFromAddressResponse) ProtoMessage() {}
func (*QueryInterchainAccountFromAddressResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_5c0b2be0eec8e13d, []int{1}
}
func (m *QueryInterchainAccountFromAddressResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInterchainAccountFromAddressResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInterchainAccountFromAddressResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInterchainAccountFromAddressResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInterchainAccountFromAddressResponse.Merge(m, src)
}
func (m *QueryInterchainAccountFromAddressResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryInterchainAccountFromAddressResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInterchainAccountFromAddressResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInterchainAccountFromAddressResponse proto.InternalMessageInfo

func (m *QueryInterchainAccountFromAddressResponse) GetInterchainAccountAddress() string {
	if m != nil {
		return m.InterchainAccountAddress
	}
	return ""
}

func init() {
	proto.RegisterType((*QueryInterchainAccountFromAddressRequest)(nil), "intertx.QueryInterchainAccountFromAddressRequest")
	proto.RegisterType((*QueryInterchainAccountFromAddressResponse)(nil), "intertx.QueryInterchainAccountFromAddressResponse")
}

func init() { proto.RegisterFile("intertx/query.proto", fileDescriptor_5c0b2be0eec8e13d) }

var fileDescriptor_5c0b2be0eec8e13d = []byte{
	// 340 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0xc1, 0x4a, 0xc3, 0x40,
	0x10, 0x86, 0xbb, 0x4a, 0x15, 0x17, 0xbd, 0xc4, 0x1e, 0x42, 0x91, 0x54, 0x83, 0x42, 0xbd, 0x64,
	0xb1, 0xde, 0x04, 0x85, 0x56, 0x10, 0x7a, 0x34, 0x47, 0x2f, 0x61, 0xbb, 0x59, 0xd2, 0x05, 0xb3,
	0x93, 0xee, 0x6e, 0xb0, 0x79, 0x00, 0xcf, 0xf6, 0xb1, 0x3c, 0xf6, 0xe8, 0xa9, 0x48, 0xeb, 0x13,
	0xf4, 0x09, 0x24, 0x49, 0xd5, 0x56, 0xa8, 0xd4, 0x5b, 0x66, 0xfe, 0x2f, 0xf3, 0xff, 0xc3, 0x2c,
	0x3e, 0x14, 0xd2, 0x70, 0x65, 0x86, 0x64, 0x90, 0x72, 0x95, 0x79, 0x89, 0x02, 0x03, 0xd6, 0xee,
	0xa2, 0x59, 0xaf, 0x45, 0x10, 0x41, 0xd1, 0x23, 0xf9, 0x57, 0x29, 0xbb, 0x1f, 0x08, 0x37, 0xef,
	0x73, 0xbc, 0x9b, 0x63, 0xac, 0x4f, 0x85, 0x6c, 0x33, 0x06, 0xa9, 0x34, 0x77, 0x0a, 0xe2, 0x76,
	0x18, 0x2a, 0xae, 0xb5, 0xcf, 0x07, 0x29, 0xd7, 0xc6, 0xaa, 0xe1, 0x2a, 0x3c, 0x49, 0xae, 0x6c,
	0x74, 0x8c, 0x9a, 0x7b, 0x7e, 0x59, 0x58, 0xd7, 0xf8, 0x80, 0x81, 0x94, 0x9c, 0x19, 0x01, 0x32,
	0x10, 0xa1, 0xbd, 0x95, 0xab, 0x1d, 0x7b, 0x3e, 0x69, 0xd4, 0x32, 0x1a, 0x3f, 0x5e, 0xb9, 0x2b,
	0xb2, 0xeb, 0xef, 0xff, 0xd4, 0xdd, 0xd0, 0x62, 0xb8, 0x5e, 0xf8, 0x71, 0x95, 0x50, 0x65, 0xb2,
	0x60, 0x75, 0xd6, 0x76, 0x31, 0xeb, 0x6c, 0x3e, 0x69, 0x9c, 0x7c, 0xcd, 0x5a, 0xc7, 0xba, 0xbe,
	0xbd, 0x2c, 0xde, 0x2e, 0x99, 0xb8, 0x23, 0x84, 0xcf, 0x37, 0x58, 0x53, 0x27, 0x20, 0x35, 0xcf,
	0x23, 0x89, 0x6f, 0x2e, 0xa0, 0x25, 0x18, 0xd0, 0x92, 0x2a, 0x97, 0x5f, 0x8e, 0xb4, 0x9e, 0x75,
	0x7d, 0x5b, 0xfc, 0x36, 0x5c, 0x98, 0xb5, 0x5e, 0x10, 0xae, 0x16, 0x91, 0xac, 0x67, 0x84, 0x8f,
	0xfe, 0xca, 0x65, 0x5d, 0x78, 0x8b, 0x23, 0x7a, 0x9b, 0x9e, 0xaa, 0xde, 0xfa, 0xcf, 0x2f, 0xe5,
	0xda, 0x9d, 0x9b, 0xd7, 0xa9, 0x83, 0xc6, 0x53, 0x07, 0xbd, 0x4f, 0x1d, 0x34, 0x9a, 0x39, 0x95,
	0xf1, 0xcc, 0xa9, 0xbc, 0xcd, 0x9c, 0xca, 0xc3, 0x69, 0x24, 0x4c, 0x3f, 0xed, 0x79, 0x0c, 0x62,
	0xc2, 0x40, 0xc7, 0xa0, 0x49, 0x44, 0x05, 0x25, 0x43, 0x12, 0xd3, 0xd4, 0xf4, 0x89, 0xc9, 0x12,
	0xae, 0x7b, 0x3b, 0xc5, 0x93, 0xba, 0xfc, 0x0c, 0x00, 0x00, 0xff, 0xff, 0x35, 0xbc, 0x03, 0x4d,
	0x88, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair
	InterchainAccountFromAddress(ctx context.Context, in *QueryInterchainAccountFromAddressRequest, opts ...grpc.CallOption) (*QueryInterchainAccountFromAddressResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) InterchainAccountFromAddress(ctx context.Context, in *QueryInterchainAccountFromAddressRequest, opts ...grpc.CallOption) (*QueryInterchainAccountFromAddressResponse, error) {
	out := new(QueryInterchainAccountFromAddressResponse)
	err := c.cc.Invoke(ctx, "/intertx.Query/InterchainAccountFromAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair
	InterchainAccountFromAddress(context.Context, *QueryInterchainAccountFromAddressRequest) (*QueryInterchainAccountFromAddressResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) InterchainAccountFromAddress(ctx context.Context, req *QueryInterchainAccountFromAddressRequest) (*QueryInterchainAccountFromAddressResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InterchainAccountFromAddress not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_InterchainAccountFromAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryInterchainAccountFromAddressRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).InterchainAccountFromAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/intertx.Query/InterchainAccountFromAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).InterchainAccountFromAddress(ctx, req.(*QueryInterchainAccountFromAddressRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "intertx.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "InterchainAccountFromAddress",
			Handler:    _Query_InterchainAccountFromAddress_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "intertx/query.proto",
}

func (m *QueryInterchainAccountFromAddressRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInterchainAccountFromAddressRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInterchainAccountFromAddressRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.CounterpartyConnectionId) > 0 {
		i -= len(m.CounterpartyConnectionId)
		copy(dAtA[i:], m.CounterpartyConnectionId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.CounterpartyConnectionId)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ConnectionId) > 0 {
		i -= len(m.ConnectionId)
		copy(dAtA[i:], m.ConnectionId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.ConnectionId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryInterchainAccountFromAddressResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInterchainAccountFromAddressResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInterchainAccountFromAddressResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.InterchainAccountAddress) > 0 {
		i -= len(m.InterchainAccountAddress)
		copy(dAtA[i:], m.InterchainAccountAddress)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.InterchainAccountAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryInterchainAccountFromAddressRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = len(m.ConnectionId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = len(m.CounterpartyConnectionId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryInterchainAccountFromAddressResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.InterchainAccountAddress)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryInterchainAccountFromAddressRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryInterchainAccountFromAddressRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInterchainAccountFromAddressRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ConnectionId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ConnectionId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CounterpartyConnectionId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CounterpartyConnectionId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryInterchainAccountFromAddressResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryInterchainAccountFromAddressResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInterchainAccountFromAddressResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InterchainAccountAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InterchainAccountAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)