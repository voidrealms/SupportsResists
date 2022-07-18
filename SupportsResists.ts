input Resistance_First= 3878.79;
input Resistance_Second = 3894.43;
input Support_First = 3832.35;
input Support_Second =  3801.55;

plot Resistance1 = Resistance_First;
plot Resistance2 = Resistance_Second;
plot Support1 = Support_First;
plot Support2 = Support_Second;

Resistance1.DefineColor("Normal", Color.ORANGE);
Resistance2.DefineColor("Normal", Color.RED);
Support1.DefineColor("Normal", Color.ORANGE);
Support2.DefineColor("Normal", Color.RED);


Resistance1.AssignValueColor(Resistance1.Color("Normal"));
Resistance2.AssignValueColor(Resistance2.Color("Normal"));
Support1.AssignValueColor(Support1.Color("Normal"));
Support2.AssignValueColor(Support2.Color("Normal"));
