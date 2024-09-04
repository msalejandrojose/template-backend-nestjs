import { Response } from 'express';
import {getEnv} from "../../launcher/config/environment";

const { keys } = getEnv();

export class CookieService {
    // Método para crear una cookie
    static setCookie(res: Response, name: string, value: string, options: any = {}): void {
        const defaultOptions = {
            httpOnly: true,  // No accesible desde JavaScript en el cliente
            secure: true,    // Solo en HTTPS
            maxAge: keys.refreshTokenTime * 24 * 60 * 60 * 1000,  // 7 días por defecto
            sameSite: 'strict' // Protege contra CSRF
        };

        // Unir opciones por defecto con las proporcionadas por el usuario
        const cookieOptions = { ...defaultOptions, ...options };

        res.cookie(name, value, cookieOptions);
    }
}
