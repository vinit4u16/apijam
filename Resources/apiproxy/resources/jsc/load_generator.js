var host = context.getVariable('request.header.host');
var basePath = context.getVariable('request.header.basepath')
var uri = "https://" + host + basePath;
print("uri: " + uri);

for (i = 0; i < 10; i++) { 
    var req = httpClient.get(uri);

    if (!req.isSuccess()) {
        print ("failed to invoke service");
    }
    else {
        print ("successfully invoked service");
    }
}