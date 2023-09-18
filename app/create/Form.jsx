"use client";
import { useState, useRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function Form({ action, children, users, ...props }) {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const ref = useRef();
  const { pending } = useFormStatus();

  const [optimisticUsers, addOptimisticUsers] = useOptimistic(
    users,
    (user, newUser) => {
      return [...user, newUser];
    }
  );

  async function formAction(formData) {
    const res = await action(formData);
    if (res.error) {
      setError(res.error);
      setSuccess(null);
    } else {
      addOptimisticUsers({
        id: Math.random(),
        name: res.name,
        email: res.email,
      });
      setSuccess(res.success);
      setError(null);
      ref.current.reset();
    }
  }

  return (
    <>
      {!!success && (
        <Alert className="text-right bg-lime-500 w-[350px] m-auto mt-7">
          <AlertTitle className="font-bold">تم بنجاح</AlertTitle>
          <AlertDescription className="font-regular">
            {success}
          </AlertDescription>
        </Alert>
      )}
      {!!error && (
        <Alert
          dir="rtl"
          className="text-right w-[350px] m-auto mt-7"
          variant="destructive"
        >
          <AlertTitle className="font-bold">خطأ</AlertTitle>
          <AlertDescription className="font-regular">{error}</AlertDescription>
        </Alert>
      )}
      <form ref={ref} action={formAction} {...props}>
        <Card className="w-[350px] m-auto mt-11">
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="mt-4 mb-2 text-right font-bold"
                  htmlFor="name"
                >
                  العنوان
                </Label>
                <Input
                  className="mt-4 text-right font-regular"
                  id="name"
                  name="name"
                  placeholder="إدخل العنوان"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="mt-4 mb-2 text-right font-bold"
                  htmlFor="email"
                >
                  البريد الإكتروني
                </Label>
                <Input
                  className="mt-4 text-right font-regular"
                  id="email"
                  name="email"
                  placeholder="إدخل البريد الإكتروني"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between font-regular">
            <Button disabled={pending}>
              {pending && "جاري الإرسال"}
              {!pending && "تـاكيد"}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <Card className="w-[350px] m-auto mt-11">
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {optimisticUsers.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
