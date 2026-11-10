public class Fibonacci {

    public static void main(String[] args) {

        int n = 10;

        int primeiro = 0;
        int segundo = 1;

        System.out.println("Sequência de Fibonacci:");

        System.out.print(primeiro + " ");
        System.out.print(segundo + " ");

        for (int i = 2; i < n; i++) {

            int proximo = primeiro + segundo;

            System.out.print(proximo + " ");

            primeiro = segundo;
            segundo = proximo;
        }
    }
}