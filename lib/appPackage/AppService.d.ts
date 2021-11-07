import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { AppRequestService as _appPackage_AppRequestService, AppRequestService__Output as _appPackage_AppRequestService__Output } from '../appPackage/AppRequestService';
import type { AppResponseService as _appPackage_AppResponseService, AppResponseService__Output as _appPackage_AppResponseService__Output } from '../appPackage/AppResponseService';
export interface AppServiceClient extends grpc.Client {
    sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
    sendToService(argument: _appPackage_AppRequestService, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
}
export interface AppServiceHandlers extends grpc.UntypedServiceImplementation {
    sendToService: grpc.handleUnaryCall<_appPackage_AppRequestService__Output, _appPackage_AppResponseService>;
}
export interface AppServiceDefinition extends grpc.ServiceDefinition {
    sendToService: MethodDefinition<_appPackage_AppRequestService, _appPackage_AppResponseService, _appPackage_AppRequestService__Output, _appPackage_AppResponseService__Output>;
}
