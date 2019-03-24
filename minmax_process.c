#include <stdlib.h> /* pour les constantes EXIT_SUCCESS ET EXIT_FAILURE */
#include <stdio.h> /* pour fprintf() */
#include <unistd.h> /* pour fork */
#include <sys/types.h> /* pour le type pid_t*/
#include <sys/errno.h>
#include <sys/wait.h>


pid_t create_process();
void *minmax(void *val);

int size=0;
int sizeArray;
int i=0,j=0;
int k=0;
int n;

struct MatrixLigneCol
{
	int *matrix;
	int ligne, col;
};

struct MatrixLigneCol getDigits(FILE *file)
{
	int buff[255] ;
	int i=0;

	printf("choisez le nombre de processus ");
	scanf("%d",&n);

	if (file == NULL)
	{
		printf("Error! Could not open file\n");
		exit(-1);
	}else{
	while (fscanf(file, "%d", buff+i) != EOF){
		size++;
		i++;
	}
        sizeArray=size/n;
        int *intMatrix =(int *) malloc(n * sizeArray * sizeof(int));
        for(i=0;i<n;i++){
        	for(j=0;j<sizeArray;j++){
			*(intMatrix + i*sizeArray + j)=*(buff+k+j);
		}
		k=k+sizeArray;
	}

	struct MatrixLigneCol fileValueMa;
	fileValueMa.col=sizeArray;
	fileValueMa.ligne=n;
	fileValueMa.matrix=intMatrix;

	return fileValueMa;
	}
}

struct data
{
	int size;
	int *numbers;
};

void terminer(void)
{
  printf("j'ai terminer\n");
}



int main ()
{
  int ip=0;
  int np=0;
  int jp=0;



  atexit(terminer);

	FILE  * file = fopen("le_fichier.txt", "r");


	struct MatrixLigneCol filevalue;
	filevalue = getDigits(file);

	int sizeArray=filevalue.col;
	int lp= filevalue.ligne -1;
	int *intMatrix = filevalue.matrix;


	pid_t pid[lp];
	int codesortie[lp];


// loop to create process
	while(ip<=lp)
  {
    pid[ip] = create_process();
    if(pid[ip] ==0)
    {
			printf("je suis le fils %d avec PID: %d\n" , (int) ip, (int) getpid());
				struct data *t_pointer, thread_msg;
				thread_msg.size = sizeArray;
				thread_msg.numbers = intMatrix + (ip*sizeArray) - 1;
				t_pointer = &thread_msg;
				minmax(t_pointer);


      	_exit(0); // don't exec the function "atexit" for the child
        break;
      }
      else
      {
        ip++;

      }
    }

//loop to wait the end of différents process
		while(np<=lp){
			pid[np] = waitpid(pid[np], &codesortie[np], WUNTRACED );
			np++;
		}

//verification of the children answers
		while(jp<=lp){
			if (WIFEXITED(codesortie[jp])){
				printf("le fils %d s'est terminé normalement"
				"avec le code de sortie  %d\n" ,  pid[jp], WEXITSTATUS(codesortie[jp]));
			}

			jp++;
		}



  printf("je suis le père  avec PID %d\n" ,  (int) getpid());

  exit(0); //execution of the function "atexit" for the father

}



pid_t create_process()
{
  pid_t pid;
  do {
    pid = fork();

  } while ((pid == -1) && (errno ==EAGAIN));
  return pid;
}

void *minmax(void *val)
{
	int *values;
	struct data *structvalues;
	structvalues = (struct data *) val;
	int sizeVals = structvalues->size;
	values =  structvalues->numbers;

	int min = values[1];
	int max = values[1];
	printf("START\n");
	for (int i=1; i<=sizeVals; i++)
	{
		if(min > values[i]){
			min = values[i];
		}
		if(max < values[i]){
			max = values[i];
		}
		printf("%d\n", values[i]);
	}




	int res[2];
	res[0] = min;
	res[1] = max;
	printf ("MIN: %d\n", res[0]);
	printf ("MAX: %d\n", res[1]);
	_exit(0);
}