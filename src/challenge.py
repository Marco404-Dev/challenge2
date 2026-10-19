"""Reproduce el cálculo central del notebook. Uso: python src/challenge.py --edad 8"""
import argparse
import math

DATOS = [(3, 50), (6, 60), (12, 70)]

def comparar(edad):
    if not math.isfinite(edad) or not 3 <= edad <= 12:
        raise ValueError('La edad debe estar entre 3 y 12 meses.')
    media_x = sum(x for x, _ in DATOS) / len(DATOS)
    media_y = sum(y for _, y in DATOS) / len(DATOS)
    pendiente = sum((x-media_x)*(y-media_y) for x, y in DATOS) / sum((x-media_x)**2 for x, _ in DATOS)
    intercepto = media_y - pendiente * media_x
    cercano = min(DATOS, key=lambda par: abs(par[0]-edad))
    return cercano, pendiente * edad + intercepto

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--edad', type=float, default=8)
    args = parser.parse_args()
    try:
        cercano, prediccion = comparar(args.edad)
    except ValueError as exc:
        parser.error(str(exc))
    print(f'Edad: {args.edad:g} meses')
    print(f'Registro más cercano: {cercano[0]} meses → {cercano[1]} min')
    print(f'Regresión lineal: {prediccion:.2f} min')
    print(f'Diferencia: {abs(cercano[1]-prediccion):.2f} min')
