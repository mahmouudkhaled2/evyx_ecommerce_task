declare type ApiResponse<T> = {
    message: string | 'success';
    statusMsg: string | 'error' | 'fail';
    user?: T;
    token?: string;
}