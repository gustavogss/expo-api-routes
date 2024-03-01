import {ExpoResponse, ExpoRequest} from 'expo-router/server';

export async function GET(): Promise<ExpoResponse>{
    return ExpoResponse.json({
        message: 'Resposta do banck-end'
    })
}

export async function POST(request: ExpoRequest): Promise<ExpoResponse>{
    const {username, password} = await request.json()
    
    return ExpoResponse.json({
        username,
        password
    })
}