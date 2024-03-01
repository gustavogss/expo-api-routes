import {ExpoResponse, ExpoRequest} from 'expo-router/server';


export async function GET(): Promise<ExpoResponse>{
    return ExpoResponse.json({
        message: 'Resposta do banck-end'
    })
}

export async function POST(request: ExpoRequest): Promise<ExpoResponse>{
    const {username, password} = await request.json()

    if(username === "Gustavo Souza" && password==="123senha"){
        return ExpoResponse.json({
            username,
            email: "gustavo@email.com"
        })
    }
    
   return new ExpoResponse("Usuário ou senha incorreto", {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
   })
}