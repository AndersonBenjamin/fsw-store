import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt2 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon />
              Fazer login
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon />
              Inicio
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentCircleIcon size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catalogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCart></ShoppingCart>
      </Button>
    </Card>
  );
};

export default Header;
<div>header</div>;
