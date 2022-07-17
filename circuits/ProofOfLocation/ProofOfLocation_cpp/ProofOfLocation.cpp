#include <stdio.h>
#include <iostream>
#include <assert.h>
#include "circom.hpp"
#include "calcwit.hpp"
void ProofOfLocation_0_create(uint soffset,uint coffset,Circom_CalcWit* ctx,std::string componentName,uint componentFather);
void ProofOfLocation_0_run(uint ctx_index,Circom_CalcWit* ctx);
void isValidPunkCity_0(Circom_CalcWit* ctx,FrElement* lvar,FrElement* destination,int destination_size);
Circom_TemplateFunction _functionTable[1] = { 
ProofOfLocation_0_run };
uint get_main_input_signal_start() {return 2;}

uint get_main_input_signal_no() {return 4;}

uint get_total_signal_no() {return 6;}

uint get_number_of_components() {return 1;}

uint get_size_of_input_hashmap() {return 256;}

uint get_size_of_witness() {return 6;}

uint get_size_of_constants() {return 4;}

uint get_size_of_io_map() {return 0;}

// function declarations
void isValidPunkCity_0(Circom_CalcWit* ctx,FrElement* lvar,FrElement* destination,int destination_size){
FrElement* circuitConstants = ctx->circuitConstants;
FrElement expaux[10];
{
PFrElement aux_dest = &lvar[13];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[14];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[15];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[16];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[1]);
}
{
PFrElement aux_dest = &lvar[17];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[1]);
}
{
PFrElement aux_dest = &lvar[18];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[1]);
}
{
PFrElement aux_dest = &lvar[19];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[2]);
}
{
PFrElement aux_dest = &lvar[20];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[2]);
}
{
PFrElement aux_dest = &lvar[21];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[2]);
}
{
PFrElement aux_dest = &lvar[4];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[13],3);
}
{
PFrElement aux_dest = &lvar[7];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[16],3);
}
{
PFrElement aux_dest = &lvar[10];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[19],3);
}
{
char* temp = Fr_element2str(&lvar[0]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[1]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[2]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[4]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[5]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[6]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[7]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[8]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[9]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[10]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[11]);
printf("%s\n",temp);
delete [] temp;
}
{
char* temp = Fr_element2str(&lvar[12]);
printf("%s\n",temp);
delete [] temp;
}
{
PFrElement aux_dest = &lvar[22];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[23];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
Fr_lt(&expaux[0],&lvar[23],&circuitConstants[3]); // line circom 40
while(Fr_isTrue(&expaux[0])){
Fr_eq(&expaux[4],&lvar[0],&lvar[(((3 * Fr_toInt(&lvar[23])) + 0) + 4)]); // line circom 41
Fr_add(&expaux[7],&lvar[(((3 * Fr_toInt(&lvar[23])) + 1) + 4)],&lvar[3]); // line circom 42
Fr_leq(&expaux[5],&lvar[1],&expaux[7]); // line circom 42
Fr_land(&expaux[3],&expaux[4],&expaux[5]); // line circom 41
Fr_sub(&expaux[6],&lvar[(((3 * Fr_toInt(&lvar[23])) + 1) + 4)],&lvar[3]); // line circom 43
Fr_geq(&expaux[4],&lvar[1],&expaux[6]); // line circom 43
Fr_land(&expaux[2],&expaux[3],&expaux[4]); // line circom 41
Fr_add(&expaux[5],&lvar[(((3 * Fr_toInt(&lvar[23])) + 2) + 4)],&lvar[3]); // line circom 44
Fr_leq(&expaux[3],&lvar[2],&expaux[5]); // line circom 44
Fr_land(&expaux[1],&expaux[2],&expaux[3]); // line circom 41
Fr_sub(&expaux[4],&lvar[(((3 * Fr_toInt(&lvar[23])) + 1) + 4)],&lvar[3]); // line circom 45
Fr_geq(&expaux[2],&lvar[2],&expaux[4]); // line circom 45
Fr_land(&expaux[0],&expaux[1],&expaux[2]); // line circom 41
if(Fr_isTrue(&expaux[0])){
{
PFrElement aux_dest = &lvar[22];
// load src
Fr_add(&expaux[0],&lvar[22],&circuitConstants[1]); // line circom 46
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
}
{
PFrElement aux_dest = &lvar[23];
// load src
Fr_add(&expaux[0],&lvar[23],&circuitConstants[1]); // line circom 40
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
Fr_lt(&expaux[0],&lvar[23],&circuitConstants[3]); // line circom 40
}
// return bucket
Fr_copy(destination,&lvar[22]);
return;
}

// template declarations
void ProofOfLocation_0_create(uint soffset,uint coffset,Circom_CalcWit* ctx,std::string componentName,uint componentFather){
ctx->componentMemory[coffset].templateId = 0;
ctx->componentMemory[coffset].templateName = "ProofOfLocation";
ctx->componentMemory[coffset].signalStart = soffset;
ctx->componentMemory[coffset].inputCounter = 4;
ctx->componentMemory[coffset].componentName = componentName;
ctx->componentMemory[coffset].idFather = componentFather;
ctx->componentMemory[coffset].subcomponents = new uint[0];
}

void ProofOfLocation_0_run(uint ctx_index,Circom_CalcWit* ctx){
FrElement* signalValues = ctx->signalValues;
u64 mySignalStart = ctx->componentMemory[ctx_index].signalStart;
std::string myTemplateName = ctx->componentMemory[ctx_index].templateName;
std::string myComponentName = ctx->componentMemory[ctx_index].componentName;
u64 myFather = ctx->componentMemory[ctx_index].idFather;
u64 myId = ctx_index;
u32* mySubcomponents = ctx->componentMemory[ctx_index].subcomponents;
FrElement* circuitConstants = ctx->circuitConstants;
std::string* listOfTemplateMessages = ctx->listOfTemplateMessages;
FrElement expaux[5];
FrElement lvar[1];
uint sub_component_aux;
{

// start of call bucket
FrElement lvarcall[24];
// copying argument 0
Fr_copy(&lvarcall[0],&signalValues[mySignalStart + 1]);
// end copying argument 0
// copying argument 1
Fr_copy(&lvarcall[1],&signalValues[mySignalStart + 2]);
// end copying argument 1
// copying argument 2
Fr_copy(&lvarcall[2],&signalValues[mySignalStart + 3]);
// end copying argument 2
// copying argument 3
Fr_copy(&lvarcall[3],&signalValues[mySignalStart + 4]);
// end copying argument 3
isValidPunkCity_0(ctx,lvarcall,&lvar[0],1);
// end call bucket
}

{
char* temp = Fr_element2str(&lvar[0]);
printf("%s\n",temp);
delete [] temp;
}
{
PFrElement aux_dest = &signalValues[mySignalStart + 0];
// load src
// end load src
Fr_copy(aux_dest,&lvar[0]);
}
}

void run(Circom_CalcWit* ctx){
ProofOfLocation_0_create(1,0,ctx,"main",0);
ProofOfLocation_0_run(0,ctx);
}

