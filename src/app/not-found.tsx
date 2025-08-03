import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import image from "@/assets/images/not-found.jpg";

const NotFound = () => {
  const t = useTranslations("NotFound");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-red-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {t("Page not found")}
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {t("The page you are looking for does not exist")}
          </p>

          <div className="mt-6 flex items-center gap-x-3">
            <Link
              href={"/"}
              className="w-1/2 shrink-0 rounded-lg bg-primary-400 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative mt-12 w-full lg:mt-0 lg:w-1/2">
          <Image
            className="mx-auto w-full max-w-lg"
            src={image}
            alt="404"
            width={514}
            height={164}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
