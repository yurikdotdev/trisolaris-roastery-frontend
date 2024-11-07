import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';

const USER_EXIST = true;

function TopBar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-green-300 p-4 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/">Logo</Link>
        <DropdownMenu>
          <DropdownMenuTrigger>Origins</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to={'/indonesia'}>Indonesia</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Brazil</DropdownMenuItem>
            <DropdownMenuItem>Columbia</DropdownMenuItem>
            <DropdownMenuItem>Kenya</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Input className="w-64" aria-label="Search for products" />
      <div className="flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ShoppingCartIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex max-h-96 w-96 flex-col gap-4 overflow-y-auto p-4">
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <DropdownMenuItem>1x Arabica Rp. 100.000</DropdownMenuItem>
            <Link to="/checkout" aria-label="Go to your cart">
              Checkout
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

        {USER_EXIST ? (
          <Avatar>
            {' '}
            <AvatarFallback>
              <Link to={'/account'}>
              JD
              </Link>
            </AvatarFallback>{' '}
          </Avatar>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </div>
    </div>
  );
}

export default TopBar;
