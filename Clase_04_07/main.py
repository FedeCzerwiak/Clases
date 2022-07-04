from tkinter import EXCEPTION

'''
try:
    numero = input('Ingrese un numero: ') #1/0 tira otro error
    numero2 = input('Ingrese otro numero: ')
    print(int(numero) + int(numero2))

except TypeError:
    print(str(numero) + numero2)
    print('No es posible concatenar este tipo de datos')

except ZeroDivisionError:
    print('No es posible dividir por cero')

except:
    print('Tu programa ha fallado')
'''

def divide_elementos(lista, divisor):
    try:
        #llenar una lista con una iteracion
        return [i/divisor for i in lista] #dividiendo la lista por un divisor
    except ZeroDivisionError as e: #e es el error
        print(e)
        return lista

lista = list(range(10))
divisor = 2 

print(divide_elementos(lista,divisor))

'''
divisor = 0 
print(divide_elementos(lista,divisor))
'''

while True:
    try: 
        edad = int(input('Introduce tu edad: '))
        print('Tu edad es de {} años'.format(edad))
        break
    except:
        print('No has introducido un entero, vuelve a intentarlo.')

while True:
    try: 
        edad = int(input('Introduce tu edad: '))
        print('Tu edad es de {} años'.format(edad))
        break
    except ValueError:
        print('No has introducido un entero, vuelve a intentarlo.')
    except KeyboardInterrupt:
        cerrar = input('\n¿Estas seguro que desea cerrar el programa?(S/N)')
        if cerrar.upper == 'S':
            print('Aplicacion cerrada por el usuario')

