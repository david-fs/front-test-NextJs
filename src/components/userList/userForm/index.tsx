import {
  Button,
  Field,
  Input,
  Stack,
  Drawer,
  Portal,
  CloseButton,
  Fieldset,
  RadioGroup,
  Flex,
  Switch,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { User } from '@/models/user.model';
import { useCreaterUser, useUpdateUser } from '@/hooks/useUsers';
import { ButtonTrigger } from '@/components/userList/userForm/buttonTrigger';

interface UserDrawerProps {
  headerTittle: string,
  type: string,
  data?: User
}

const profileOptions = [
  { value: '01', label: 'User' },
  { value: '02', label: 'Root' },
  { value: '03', label: 'Admin' },
];

export function UserDrawer({ headerTittle, type, data }: UserDrawerProps) {
  const [open, setOpen] = useState(false);
  const {mutate: create} = useCreaterUser()
  const {mutate: update} = useUpdateUser()
  const {
    register,
    handleSubmit,
    control,
  } = useForm<User>( { defaultValues: data || { profileId: '01', isActive: true } });

  function handleClose() {
    setOpen(!open);
  }

  const onSubmit = handleSubmit((data) => {
    if (type === 'Create') {
      create(data)
        handleClose()

    } else {
      update(data)
        handleClose()

    }
  });


  return (
    <Drawer.Root
      size={'lg'}
      closeOnEscape={false}
      closeOnInteractOutside={false}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <ButtonTrigger type={type}></ButtonTrigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md" p={8}>
            <Drawer.Header>
              <Drawer.Title>{headerTittle}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <form>
                <Stack gap="6" align="flex-start" maxW="sm" pt={8}>
                  <Field.Root required>
                    <Field.Label>Nome <Field.RequiredIndicator /></Field.Label>
                    <Input pl={2} {...register('firstName')} />
                  </Field.Root>

                  <Field.Root required>
                    <Field.Label>Sobrenome <Field.RequiredIndicator /></Field.Label>
                    <Input pl={2} {...register('lastName')} />
                  </Field.Root>

                  <Field.Root required>
                    <Field.Label>E-mail <Field.RequiredIndicator /></Field.Label>
                    <Input type={'email'} pl={2} {...register('email')} />
                  </Field.Root>

                  <Fieldset.Root>
                    <Fieldset.Legend>Selecione o perfil:</Fieldset.Legend>
                    <Controller
                      {...register('profileId')}
                      control={control}
                      render={({ field }) => (
                        <RadioGroup.Root
                          name={field.name}
                          value={field.value}
                          onValueChange={({ value }) => {
                            field.onChange(value);
                          }}
                          colorPalette="teal"
                        >
                          <Flex gap="4" flexDirection={'column'} pt={6}>
                            {profileOptions.map((item) => (
                              <RadioGroup.Item key={item.value} value={item.value}>
                                <RadioGroup.ItemHiddenInput onBlur={field.onBlur} />
                                <RadioGroup.ItemIndicator />
                                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                              </RadioGroup.Item>
                            ))}
                          </Flex>
                        </RadioGroup.Root>
                      )}
                    />
                  </Fieldset.Root>

                  <Controller
                    {...register('isActive')}
                    control={control}
                    render={({ field }) => (
                      <Field.Root>
                        <Switch.Root
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={({ checked }) => field.onChange(checked)}
                          colorPalette={'green'}
                        >
                          <Switch.HiddenInput onBlur={field.onBlur} />
                          <Switch.Control />
                          <Switch.Label>Usuário está ativo?</Switch.Label>
                        </Switch.Root>
                      </Field.Root>
                    )}
                  />
                </Stack>
              </form>
            </Drawer.Body>
            <Drawer.Footer>

              <Button
                colorPalette="red"
                variant="solid"
                w={32}
                onClick={() => handleClose()}>Cancel</Button>
              <Button
                colorPalette="green"
                variant="solid"
                w={32}
                onClick={() => onSubmit()}>Salvar</Button>

            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}