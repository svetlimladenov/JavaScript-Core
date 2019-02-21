function validateRequest(input) {
    let allowedMethods = ['GET','POST','CONNECT','DELETE'];
    if (input.method === undefined || allowedMethods.indexOf(input.method) === -1){
        throw new Error(`Invalid request header: Invalid Method`);
    }
    let uriRegex = /^[\w.*]+$/g;
    if (input.uri === undefined ||!uriRegex.test(input.uri))
    {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    let validHttpVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1' , 'HTTP/2.0'];
    if (input.version === undefined || validHttpVersions.indexOf(input.version) === -1){
        throw new Error(`Invalid request header: Invalid Version`);
    }

    let messageRegex = /^[^<>&'"\\]*$/g;
    if (input.message === undefined || !messageRegex.test(input.message))
    {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return input;
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
