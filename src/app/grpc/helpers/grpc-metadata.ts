import { Metadata } from 'grpc-web';

import { TOKEN_KEY } from '@constants/storage-keys';

export function grpcJwtMetadata(token: string = ''): Metadata {
    return {
        Authorization: token || JSON.parse(TOKEN_KEY),
    };
}
