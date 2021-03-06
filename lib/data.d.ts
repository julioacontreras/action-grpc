import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';
import type { AppServiceClient as _appPackage_AppServiceClient, AppServiceDefinition as _appPackage_AppServiceDefinition } from './appPackage/AppService';
declare type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new (...args: ConstructorParameters<Constructor>): Subtype;
};
export interface ProtoGrpcType {
    appPackage: {
        AppRequestService: MessageTypeDefinition;
        AppResponseService: MessageTypeDefinition;
        AppService: SubtypeConstructor<typeof grpc.Client, _appPackage_AppServiceClient> & {
            service: _appPackage_AppServiceDefinition;
        };
    };
}
export {};
