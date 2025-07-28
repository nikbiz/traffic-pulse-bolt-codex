import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import { TeamMember } from '@/lib/types';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
        <p className="text-sky-600 font-medium">{member.role}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">{member.bio}</p>
        
        {member.linkedin && (
          <Button asChild variant="outline" size="sm">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Linkedin className="h-4 w-4 mr-2" />
              Connect
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}