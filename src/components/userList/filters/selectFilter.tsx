import { Portal, Select, createListCollection, CollectionItem } from '@chakra-ui/react';
import { Profile } from '@/models/profile.model';

interface SelectFilterProps {
  setProfileFilters: (value: (((prevState: string) => string) | string)) => void,
  data: Profile[],
  isLoading: boolean
}

export function SelectFilter({ setProfileFilters, data, isLoading }: SelectFilterProps) {

  function handleSelect(item: CollectionItem) {
    console.log(item);
    if (item.length === 0) {
      setProfileFilters('');
    } else {
      setProfileFilters(item[0].value);
    }

  }

  const formatedOptions = () => data.map((item) => {return{label:item.name, value:item.id}})

  const options = createListCollection({
    items: formatedOptions(),
  });


  return (
    <Select.Root disabled={isLoading} collection={options} width="320px" h={'40px'} onValueChange={(e) => handleSelect(e.items)}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Selecione um perfil" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {options.items.map((profile) => (
              <Select.Item item={profile} key={profile.value}>
                {profile.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}