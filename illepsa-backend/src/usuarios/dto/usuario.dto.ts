import {IsNotEmpty, IsString, IsOptional, IsNumber} from 'class-validator'

export class UsuarioDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nombreCompleto: string

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    empresa: string

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    ruc: number
}
