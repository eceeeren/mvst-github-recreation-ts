import { SelectPanel, Button } from '@primer/react';
import React from 'react';
import { TriangleDownIcon } from '@primer/octicons-react';


export default function SpecializedSelectPanel(items: {text: string, id: number}[] ) {

  const [selected, setSelected] = React.useState<{text: string, id: number}>(items[0])
  const [filter, setFilter] = React.useState<string>('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()))
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div></div>
  );
}