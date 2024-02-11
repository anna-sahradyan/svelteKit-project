import {json} from "@sveltejs/kit";

// export async function GET(req) {
//     const completed = req.query.get('completed') === 'true' ? true : false
//     // return {
//     //     status: 200,
//     //     body: {
//     //         todo: completed,
//     //     }
//     // }
//     return json("hello")
// }
export async function POST(event) {
    const body = await event.request.formData();

    // log all fields
    console.log([...body]);

    return json({
        // get a specific field's value
        name: body.get('name') ?? 'world'
    });
}
export async function post(req) {

}

export async function put(req) {

}

export async function del(req) {

}
