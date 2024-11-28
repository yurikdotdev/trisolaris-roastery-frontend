import { getYear } from '@/lib/utils';
import DarkModeButton from '../common/DarkModeButton';

function Footer() {
  return (
    <footer className="h-52 w-full bg-custom-bgLight text-custom-textLight dark:bg-custom-bgDark dark:text-custom-textDark">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <p className="font-roboto text-sm font-light">
          Designed and built by @yurikdotdev
        </p>
        <p className="font-newsreader text-3xl font-bold italic">
          Trisolaris Roastery Co.
        </p>
        <p className="text-sm text-custom-accent">&copy; {getYear()}</p>
        <DarkModeButton />
      </div>
    </footer>
  );
}

export default Footer;
