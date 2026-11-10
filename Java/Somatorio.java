public class Somatorio {

    public static int calcularSomatorio(int[] numeros) {

        int soma = 0;

        for (int numero : numeros) {
            soma = soma + numero;
        }

        return soma;
    }

    public static void main(String[] args) {

        int[] numeros = {10, 20, 30, 40};

        int resultado = calcularSomatorio(numeros);

        System.out.println("Somatório: " + resultado);
    }
}