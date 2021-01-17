import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = Date.now();
    context.res = {
        body: {
            response: responseMessage,
            request: {
                query: req.query,
                headers: req.headers,
                body: req.body,
            },

            msg: 'This is a typescript function '
        }

    };

};

export default httpTrigger;