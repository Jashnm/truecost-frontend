## Truecost frontend

1. First, install the dependencies:

```bash
npm i
# or
yarn
```

2. create `.env.local` file and add the environment variables -

```bash
NEXT_PUBLIC_FLIGHTS_KEY=
NEXT_PUBLIC_TRANSPORT_KEY=
NEXT_PUBLIC_COMMUTE_KEY=
BASE_API_URL=
```

> Make Sure the backend service is running locally or you can also enter the deployed server.

3. Run development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000/truecost/flights](http://localhost:3000/truecost/flights) with your browser to see the result.

- All calls are POST type

### Improvements that can be done

- Form validation
- Better UI in terms of images use and animations
- Hamburger menu for more friendly header
