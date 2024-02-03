# technical_assessment-BE

## Getting Started

Clone and install the example

```bash
git clone https://github.com/LokoGod/technical_assessment-BE.git
cd technical_assessment-BE
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Log-in using the following credentials:

role: owner\
userName: lokogod\
password: MayuPali@2024\
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzA2OTQ1NzI5LCJleHAiOjE3MDcyMDQ5Mjl9.0prOE9tnQ9_QVhujUqfLuetX_8JKsDGbH8bBeXJJU4w"

role: manager\
userName: adzero\
password: MayuPali@2024\
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzA2OTQ1NzU1LCJleHAiOjE3MDcyMDQ5NTV9.Nj3GQQ-vlzKkNnkU_N2ANK_drN5iEIMXo0Xvtfw5_sE"

role: cashier\
userName: mico\
password: MayuPali@2024\
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzA2OTQ1NzcyLCJleHAiOjE3MDcyMDQ5NzJ9.P1Dt0ewIF3KdfDEjavORxulKL_v2ATrB9oq2dKdQAGQ"

When logged-in the endpoint should return the appropriate token.

Copy the tokens and paste it in postman>Auth>Bearer Token>Token