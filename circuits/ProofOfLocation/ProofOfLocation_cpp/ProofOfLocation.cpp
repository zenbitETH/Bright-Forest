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

uint get_size_of_constants() {return 21;}

uint get_size_of_io_map() {return 0;}

// function declarations
void isValidPunkCity_0(Circom_CalcWit* ctx,FrElement* lvar,FrElement* destination,int destination_size){
FrElement* circuitConstants = ctx->circuitConstants;
FrElement expaux[10];
{
PFrElement aux_dest = &lvar[19];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[1]);
}
{
PFrElement aux_dest = &lvar[20];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[3]);
}
{
PFrElement aux_dest = &lvar[21];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[5]);
}
{
PFrElement aux_dest = &lvar[22];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[6]);
}
{
PFrElement aux_dest = &lvar[23];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[7]);
}
{
PFrElement aux_dest = &lvar[24];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[8]);
}
{
PFrElement aux_dest = &lvar[25];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[9]);
}
{
PFrElement aux_dest = &lvar[26];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[10]);
}
{
PFrElement aux_dest = &lvar[27];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[11]);
}
{
PFrElement aux_dest = &lvar[28];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[12]);
}
{
PFrElement aux_dest = &lvar[29];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[13]);
}
{
PFrElement aux_dest = &lvar[30];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[14]);
}
{
PFrElement aux_dest = &lvar[31];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[15]);
}
{
PFrElement aux_dest = &lvar[32];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[16]);
}
{
PFrElement aux_dest = &lvar[33];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[17]);
}
{
PFrElement aux_dest = &lvar[4];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[19],3);
}
{
PFrElement aux_dest = &lvar[7];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[22],3);
}
{
PFrElement aux_dest = &lvar[10];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[25],3);
}
{
PFrElement aux_dest = &lvar[13];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[28],3);
}
{
PFrElement aux_dest = &lvar[16];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[31],3);
}
{
PFrElement aux_dest = &lvar[34];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[35];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
Fr_lt(&expaux[0],&lvar[35],&circuitConstants[20]); // line circom 29
while(Fr_isTrue(&expaux[0])){
Fr_eq(&expaux[4],&lvar[0],&lvar[(((3 * Fr_toInt(&lvar[35])) + 0) + 4)]); // line circom 30
Fr_add(&expaux[7],&lvar[(((3 * Fr_toInt(&lvar[35])) + 1) + 4)],&lvar[3]); // line circom 31
Fr_leq(&expaux[5],&lvar[1],&expaux[7]); // line circom 31
Fr_land(&expaux[3],&expaux[4],&expaux[5]); // line circom 30
Fr_sub(&expaux[6],&lvar[(((3 * Fr_toInt(&lvar[35])) + 1) + 4)],&lvar[3]); // line circom 32
Fr_geq(&expaux[4],&lvar[1],&expaux[6]); // line circom 32
Fr_land(&expaux[2],&expaux[3],&expaux[4]); // line circom 30
Fr_add(&expaux[5],&lvar[(((3 * Fr_toInt(&lvar[35])) + 2) + 4)],&lvar[3]); // line circom 33
Fr_leq(&expaux[3],&lvar[2],&expaux[5]); // line circom 33
Fr_land(&expaux[1],&expaux[2],&expaux[3]); // line circom 30
Fr_sub(&expaux[4],&lvar[(((3 * Fr_toInt(&lvar[35])) + 1) + 4)],&lvar[3]); // line circom 34
Fr_geq(&expaux[2],&lvar[2],&expaux[4]); // line circom 34
Fr_land(&expaux[0],&expaux[1],&expaux[2]); // line circom 30
if(Fr_isTrue(&expaux[0])){
{
PFrElement aux_dest = &lvar[34];
// load src
Fr_add(&expaux[0],&lvar[34],&circuitConstants[2]); // line circom 35
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
}
{
PFrElement aux_dest = &lvar[35];
// load src
Fr_add(&expaux[0],&lvar[35],&circuitConstants[2]); // line circom 29
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
Fr_lt(&expaux[0],&lvar[35],&circuitConstants[20]); // line circom 29
}
// return bucket
Fr_copy(destination,&lvar[34]);
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
FrElement lvar[0];
uint sub_component_aux;
{

// start of call bucket
FrElement lvarcall[36];
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
isValidPunkCity_0(ctx,lvarcall,&signalValues[mySignalStart + 0],1);
// end call bucket
}

}

void run(Circom_CalcWit* ctx){
ProofOfLocation_0_create(1,0,ctx,"main",0);
ProofOfLocation_0_run(0,ctx);
}

