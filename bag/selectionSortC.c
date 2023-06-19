
	//Selection sort with C language
		#include <stdio.h>

		void    sort_int_tab(int *tab, int size)
		{
			int    dam;
			int    i;
			int    j;

			i = 0;
			while (i < size - 1)
			{
				j = i + 1;
				while (j < size)
				{    
					if (tab[i] > tab[j])
					{
						dam = tab[i];
						tab[i] = tab[j];
						tab[j] = dam;
					}
					j++;
				}
				i++;
			}
		}

		//main함수는 테스트 케이스를 입력
		int main(void)
		{
			int arr1[13] = {10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0};
			int i = 0;
			int size = 13;

			printf("정렬 전 : ");

			while (i < 13)
			{
				printf("%d ", arr1[i]);
				i++;
			}

			printf("\n ");

			printf("정렬 후 :  ");
			sort_int_tab(arr1, size);
						
			i = 0;
			while (i < 13)
			{
				printf("%d ", arr1[i]);
				i++;
			}
			return(0);
		}
