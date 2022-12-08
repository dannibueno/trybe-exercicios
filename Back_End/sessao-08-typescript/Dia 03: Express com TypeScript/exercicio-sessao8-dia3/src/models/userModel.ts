import connection from "./connection";
import IUser from "../interface/IUser";
import { ResultSetHeader } from "mysql2";

export async function getAll(): Promise<IUser[]> {
    const query = "SELECT * FROM TypeScriptExpress.Users";
    const [users] = await connection.execute(query)

    return users as IUser[];
}

export async function getById(id:number): Promise<IUser | null> {
    const query = "SELECT * FROM TypeScriptExpress.Users WHERE id=?";
    const values = [id];

    const [data] = await connection.execute(query, values);
    const [user] = data as IUser[];

    return user || null;
}

export async function getByEmail(email:string): Promise<IUser | null> {
    const query = "SELECT * FROM TypeScriptExpress.Users WHERE id=?";
    const values = [email];

    const [data] = await connection.execute(query, values);
    const [user] = data as IUser[];

    return user || null;

}