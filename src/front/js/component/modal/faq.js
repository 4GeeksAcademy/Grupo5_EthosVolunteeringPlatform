import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export const FaqAccordion = (props) => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">¿Ethos requiere de una membresía?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Ethos no requiere de membresías. </strong>
            Solo de tu tiempo y compromiso para asistir a las campañas que agendas para participar.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">¿Hay un límite de campañas en el que puedo participar?</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>Tu tiempo es el límite. </strong>
            Puedes participar en todas las campañas que quieras, siempre que tengas tiempo y haya cupos disponibles.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">¿Puedo realizar mi TCU con ETHOS?</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>No por el momento. </strong>
            Sin embargo, a partir del 2024 tendremos abierto un el programa ETHOS Uni, para aquellos estudiantes universitarios que necesiten realizar su Trabajo Comunal Universitario.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}


