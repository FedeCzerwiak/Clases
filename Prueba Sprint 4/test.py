import sys
import csv

POSICION_ARGUMENTO_NOMBRE_ARCHIVO = 1
POSICION_ARGUMENTO_DNI = 2
POSICION_ARGUMENTO_NUMERO = 3

ETIQUETA_CABEVERA_CSV_DNI = 'DNI'
ETIQUETA_CABEVERA_CSV_NUM_CHEQUE = 'NroCheque'
ETIQUETA_CABEVERA_CSV_FECHA = 'Fecha'
ETIQUETA_CABEVERA_CSV_CUENTA = 'NroCuenta'
ETIQUETA_CABEVERA_CSV_VALOR = 'Valor'
ETIQUETA_CABEVERA_CSV_ESTADO = 'Estado'

if __name__ == '__main__':
    with open(sys.argv[POSICION_ARGUMENTO_NOMBRE_ARCHIVO]) as archivo:
        lector = csv.reader(archivo)
        datos = list(lector)

    cabecera = datos[0]
    
    (
        posicion_dni,
        posicion_numero,
        posicion_fecha,
        posicion_estado
    ) = (
        cabecera.index(ETIQUETA_CABEVERA_CSV_DNI),
        cabecera.index(ETIQUETA_CABEVERA_CSV_NUM_CHEQUE),
        cabecera.index(ETIQUETA_CABEVERA_CSV_FECHA),
        cabecera.index(ETIQUETA_CABEVERA_CSV_ESTADO)
    )

    datos_cliente = list(filter(
        lambda registro: registro[posicion_dni] == sys.argv[POSICION_ARGUMENTO_DNI], datos[1:]))

    print(','.join(cabecera))

    for dato in datos_cliente:
        print(','.join(dato))