---
title: Unlocking the AMD Neural Processing Unit for ML Training on the  Client Using Bare-Metal-Programming Tools
tagline: A. Rösti, M. Franz. **To appear** in the 33rd IEEE International Symposium on Field-Programmable Custom Computing Machines (FCCM), 2025.
do_link: false
date: 2025-03-09
category: research
---

<h2 class="section-title">FCCM 2025</h2> 
<h3>Unlocking the AMD Neural Processing Unit for ML Training on the  Client Using Bare-Metal-Programming Tools</h3>

There has been a growing interest in executing machine learning (ML) workloads on the client side for reasons of customizability, privacy, performance, and availability. 
In response, hardware manufacturers have begun to incorporate so-called Neural Processing Units (NPUs) into their processors for consumer devices. 
Such dedicated hardware optimizes both power efficiency and throughput for common machine learning tasks. 
AMD's NPU, part of their Ryzen AI processors, is one of the first such accelerators integrated into a chip with an x86 processor. 
AMD supports bare-metal programming of their NPU rather than limiting programmers to pre-configured libraries.

In this paper, we explore the potential of using a bare-metal toolchain to accelerate the weight fine-tuning of a large language model, GPT-2, entirely on the client side using the AMD NPU. 
Fine-tuning on the edge allows for private customization of a model to a specific use case. 
To the best of our knowledge, this is the first time such an accelerator has been used to perform training on the client side. 
We offload time-intensive matrix multiplication operations from the CPU onto the NPU, achieving a speedup of over 2.8× for these operations. 
This improves end-to-end performance of the model in terms of throughput (1.7× and 1.2× speedup in FLOPS/s on mains and battery power, respectively) and energy efficiency (1.4× improvement in FLOPS/Ws on battery power). 
We detail our implementation approach and present an in-depth exploration of the NPU hardware and bare-metal tool-flow.
