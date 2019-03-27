#ifndef FILE_TEST_H
#define FILE_TEST_H

  #include <stdio.h>
  #include<stdlib.h>
  #include<math.h>

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

    struct data
    {
        int size;
        int *numbers;
    };   

    struct MatrixLigneCol getDigits(FILE *file){
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

    void copyMemUse()
    {
        char ch;
        FILE *source, *target;

        source = fopen("/proc/self/status", "r");

        if (source == NULL)
        {
            exit(EXIT_FAILURE);
        }

        target = fopen("Thread_Stats.txt", "w");

        while((ch = fgetc(source)) != EOF)
            fputc(ch, target);

        printf("See Thread_Stats.txt for Memory Usage.\n");
        fclose(source);
        fclose(target);
    }

#endif /* FILE_TEST_H */