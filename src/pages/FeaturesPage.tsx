import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wallet, Send, Download, Upload, Users } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Cash In",
      description: "Easily add money to your wallet using multiple payment options.",
      icon: <Download className="h-8 w-8 text-primary" />,
    },
    {
      title: "Cash Out",
      description: "Withdraw money securely to your bank or preferred cash-out agent.",
      icon: <Upload className="h-8 w-8 text-primary" />,
    },
    {
      title: "Send Money",
      description: "Instantly transfer money to friends, family, or businesses.",
      icon: <Send className="h-8 w-8 text-primary" />,
    },
    {
      title: "Receive Money",
      description: "Accept payments quickly and securely from others.",
      icon: <Wallet className="h-8 w-8 text-primary" />,
    },
    {
      title: "Role-Based Access",
      description: "User, Agent, and Admin roles for personalized dashboards and controls.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Secure Transactions",
      description: "Protected with encryption and fraud detection for your peace of mind.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the powerful features of <span className="font-semibold">No-Cash</span> – 
          a secure and fast digital wallet solution for everyone.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
};