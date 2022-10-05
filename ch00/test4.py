coin_dict_list = read_file('/ch00/constant/COIN.txt')

if not coin_dict_list:
  print("파일에 관한 에러가 발생하였습니다.")
  return None

for co in coin_dict_list:
  print(co)