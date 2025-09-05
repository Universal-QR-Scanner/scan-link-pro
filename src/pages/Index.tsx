import { Link } from 'react-router-dom';
import { Scan, Shield, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Exhibition QR Scanner
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Streamline your trade exhibition with secure QR code scanning. 
              Capture customer data instantly and manage exhibitor access with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="bg-white/20 hover:bg-white/30 border border-white/30">
                <Link to="/admin">
                  <Shield className="mr-2 h-5 w-5" />
                  Admin Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <a href="#features">
                  <Scan className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built specifically for trade exhibitions with security, speed, and simplicity in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Scan className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Fast QR Scanning</CardTitle>
              <CardDescription>
                Instant camera-based QR code scanning optimized for mobile devices and tablets.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>
                Unique, token-based URLs for each exhibitor ensure secure and controlled access.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Easy Management</CardTitle>
              <CardDescription>
                Simple admin dashboard to create exhibitions, manage exhibitors, and generate scanner links.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Create Exhibition</h4>
              <p className="text-sm text-muted-foreground">Set up your trade exhibition and add exhibitor details through the admin dashboard.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">Generate Scanner URLs</h4>
              <p className="text-sm text-muted-foreground">Each exhibitor gets a unique, secure URL for accessing their personal scanner interface.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Scan & Collect</h4>
              <p className="text-sm text-muted-foreground">Exhibitors use their mobile devices to scan customer QR codes and automatically save contact data.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Perfect for Trade Exhibitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">No App Downloads Required</h4>
                <p className="text-sm text-muted-foreground">Works directly in web browsers - no installations needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Mobile Optimized</h4>
                <p className="text-sm text-muted-foreground">Responsive design works perfectly on phones and tablets.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Instant Data Capture</h4>
                <p className="text-sm text-muted-foreground">Customer information is saved immediately upon successful scan.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Secure & Private</h4>
                <p className="text-sm text-muted-foreground">Token-based authentication ensures only authorized access.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Set up your first exhibition in minutes and start scanning QR codes right away.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/admin">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
