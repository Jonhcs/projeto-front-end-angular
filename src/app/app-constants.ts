

export class AppConstants {
    public static get baseServidor(): String {
        return "http://localhost:8080/"
    }
    public static get baseLogin(): any {
        return this.baseServidor + "login";
    }

    public static get baseUrl(): any {
        return this.baseServidor + "usuarios/";
    }
    public static get baseUrlTelefone(): any {
        return this.baseServidor + "usuarios/telefones/";
    }

    public static get baseUrlProfissao(): any {
        return this.baseServidor + "profissoes";
    }
    public static get baseUrlRecuperar(): any {
        return this.baseServidor + "recuperar";
    }
}
