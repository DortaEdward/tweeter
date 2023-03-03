import bcrypt from 'bcrypt';

export async function encryptPassword(payload: string){
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hashSync(payload,salt);
}

export async function comparePasswords(payload: string, password: string) {
  return await bcrypt.compareSync(payload,password);
}