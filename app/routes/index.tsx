import { ErrorBoundaryComponent, LoaderFunction, useLoaderData } from 'remix';
import MainLayout from '~/layouts/MainLayout';
import octokit from '~/utils/octokit';

interface Data {
  photoURL: string;
}

export const loader: LoaderFunction = async (args): Promise<Data> => {
  const res = await octokit.rest.users.getByUsername({
    username: 'RayhanHamada',
  });

  return {
    photoURL: res.data.avatar_url as string,
  };
};

export default function Index() {
  const { photoURL } = useLoaderData<Data>();
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center space-y-8">
        <img
          src={photoURL}
          alt="Foto Profil"
          className="w-[120px] max-w-[200px] h-auto rounded-1 md:w-[200px]"
        />

        <p className="text-[#e41749] text-md md:text-2xl lg:text-5xl font-bold tracking-wide">
          Muhammad Rayhan Hamada Budiman
        </p>
        <p className="text-xs md:text-base">
          Student. Programmer. Procrastinator.
        </p>
        <hr className="h-[1px] w-[80%] bg-[#e41749]" />
        <p className="w-[80%] text-center">
          Honestly, i don't really know how i got here. All i know i was facing
          a problem, go try to build solution to solve it, or even better, try
          to improve the solution itself.
        </p>

        <p className="w-[80%] text-center">
          Or in the absent of problems, i would think of something interesting,
          like
        </p>
        <p className="w-[80%] text-xl text-center">
          "What if i build a{' '}
          <a className="underline">
            programming language that lets you specify your own syntax
          </a>{' '}
          ?"
        </p>
        <p className="w-[80%] text-center">
          And so i try to build{' '}
          <a href="" className="underline">
            Exprezeene
          </a>{' '}
          (in bahasa you can call it "Ekspresiin")
        </p>
      </div>
    </MainLayout>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
