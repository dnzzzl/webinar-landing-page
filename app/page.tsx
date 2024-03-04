"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {Label} from '@/components/ui/label'
import { Input } from "@/components/ui/input";
import { BarChartBig, Clock, CalendarCheck } from "lucide-react";
import clixLogoTransparentBg from "@/public/clix-logo-no-bg.png"
import scrumLogoWhiteTransparentBg from "@/public/Scrum-Network-Logo-White.webp"
//import redBg from "@/public/6CaiUV.jpg"
import Image from "next/image";
//import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <main className="dark bg-scroll bg-[url('/bg-7-full.jpg')] min-h-[972px] bg-cover text-primary">
        <div className="md:max-w-4xl h-full mx-auto">
          <div className="flex justify-around mx-auto items-baseline">
            <span className="p-4">
              <Image
              alt="clix-logo"
              src={clixLogoTransparentBg}
              className="max-w-40 md:max-w-60"
              />
            </span>
            <span className="p-4">
              <Image 
                alt="clix-logo"
                src={scrumLogoWhiteTransparentBg}
                className="max-w-28 md:max-w-40"
                />
            </span>
          </div>
          <div className="font-light md:text-4xl text-2xl text-center p-4">
          <p >
           <strong>Clix Solution Consulting</strong> le da la bienvenida a <strong>Scrum Network</strong>, empresa líder en metodología ágil. 
          </p>
          <p>
          Juntos estaremos instruyendo como implementar una cultura ágil en tu empresa.
          </p>
          </div>
          <div className="my-8 pb-8 fonts">
              <h1 className="text-6xl md:text-9xl max-w-min mx-auto text-center font-extrabold -rotate-3">
                Optimiza tus proyectos
              </h1>
          </div>
          <h2 className="text-xl md:text-4xl text-center pb-4">
            Unete al Webinar de <strong>Scrum Network</strong> en Republica Dominicana
          </h2>
          <section className="dark flex justify-center flex-col bg-background py-16 my-8">
            <div className="flex md:flex-row flex-col">
              <div className="md:w-1/2 md:text-end text-center font-semibold">
                <p className="capitalize p-4 text-xl md:text-2xl md:max-w-xs mx-auto">
                  Si necesitas responder las siguientes preguntas:
                </p>
              </div>
              <span className="md:w-1/2  p-6 mx-4 md:mx-0">
                <ul className="list-disc" >
                  <li >
                    <p>Por que se retrasan los proyectos?</p>
                  </li>
                  <li>
                    <p>Como puedo implementar una cultura ágil en mi empresa?</p>
                  </li>
                  <li>
                    <p>Como me puede apoyar Scrum Network?</p>
                  </li>
                  <li>
                    <p>Como puedo certificar mi equipo de trabajo?</p>
                  </li>
                </ul>
              </span>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 mx-auto rounded-lg p-4">Unete</DialogTrigger>
              <DialogContent className="dark text-primary">
                <DialogHeader>
                  <DialogTitle>Unete a nuestro Webinar</DialogTitle>
                  <DialogDescription>
                    Anade tu correo electronico para que te enviemos las proximas comunicaciones de Scrum Network.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nombre
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="correo" className="text-right">
                      Correo Electronico
                    </Label>
                    <Input id="correo" type="email" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Aceptar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>
          <section className=" flex justify-around py-10 md:text-2xl text-foreground">
            <div className="p-4 flex flex-col items-center">
              <Clock className="md:w-28 md:h-28"/>
              <p className="max-w-min text-center ">11:00 AM</p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <BarChartBig  className="md:w-28 md:h-28"/>
              <p className="max-w-min text-center">Optimiza Tus Proyectos</p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <CalendarCheck className="md:w-28 md:h-28"/>
              <p className="max-w-min text-center">Miercoles 13 de Marzo 2024</p>
            </div>
          </section>
          <div className="w-full flex  mb-2">
            <Button className="dark w-full uppercase mx-4" onClick={() => handleClick()}>Registrate aqui, ahora</Button>
          </div>
        </div>
        <Separator orientation="horizontal" decorative={true} className=" p-1"/>
      </main>
      <footer className="dark bg-background text-foreground p-20">
        <div className="md:max-w-4xl mx-auto">
          footer
        </div>
      </footer>
    </>
  );
}
