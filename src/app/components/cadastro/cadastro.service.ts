import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/login"

  constructor(private snackBar: MatSnackBar, private  http: HttpClient) { }

  // Abrir um modal com msg a definir
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: "bottom"
    });
  }

  // Cria uma cadastro - POST
  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }

  // Busca todos os dados de cadastro - GET
  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }

  // Busca os dados de cadastro pelo ID - GET
  readById(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url)
  }

  // Atualiza o cadastro - PUT
  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  // Deleta um cadastro pelo ID - Delete
  deleteCadastro(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cadastro>(url)
  }

}
